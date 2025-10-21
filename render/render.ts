///<reference types="./index.d.ts" />
import { LineChartProps } from "@mui/x-charts/LineChart";
import { lists } from "virtual:lists";

type BenchExecuteResult = {
  time: number;
  size: number;
};
type BenchModeResult = {
  O3: BenchExecuteResult;
  Oz: BenchExecuteResult;
};
export type BenchResult = {
  name: string;
  results: {
    active: BenchModeResult;
    passive: BenchModeResult;
  };
};

export async function fetchData(setData: React.Dispatch<Record<string, BenchResult[]>>) {
  console.log(lists);
  let data: Record<string, BenchResult[]> = {};
  for (const line of lists.split("\n")) {
    if (!line) continue;
    const res = await (await fetch(line)).json();
    data[line] = res;
  }
  setData(data);
}

const platforms = ["darwin-arm64", "linux-x64", "linux-arm64"];
const caseNames = ["parser"];

function getLineKey(platform: string, mode: "O3" | "Oz", metric: "time" | "size") {
  return `${platform}-${mode}-${metric}`;
}

export function toLineChartProps(
  data: Record<string, BenchResult[]>,
  {
    enableDarwinArm64,
    enableLinuxX64,
    enableLinuxArm64,
    enableO3,
    enableOz,
    enablePerformance,
    enableSize,
    enableTestCaseParser,
  }: {
    enableDarwinArm64: boolean;
    enableLinuxX64: boolean;
    enableLinuxArm64: boolean;
    enableO3: boolean;
    enableOz: boolean;
    enablePerformance: boolean;
    enableSize: boolean;
    enableTestCaseParser: boolean;
  }
): LineChartProps {
  const isPlatformDisabled = (platform: string) => {
    return (
      (platform === "darwin-arm64" && !enableDarwinArm64) ||
      (platform === "linux-x64" && !enableLinuxX64) ||
      (platform === "linux-arm64" && !enableLinuxArm64)
    );
  };
  const isTestCaseDisabled = (caseName: string) => {
    return caseName === "parser" && !enableTestCaseParser;
  };

  if (!enableDarwinArm64 && !enableLinuxX64 && !enableLinuxArm64) return { xAxis: [], series: [] };
  if (!enableO3 && !enableOz) return { xAxis: [], series: [] };
  if (!enablePerformance && !enableSize) return { xAxis: [], series: [] };
  if (!enableTestCaseParser) return { xAxis: [], series: [] };

  const seriesMap: Record<string, { data: (number | null)[]; label?: string }> = {
    baseline: { data: [], label: "baseline" },
  };
  for (const platform of platforms) {
    if (isPlatformDisabled(platform)) continue;
    if (enableO3) {
      if (enablePerformance) {
        seriesMap[getLineKey(platform, "O3", "time")] = {
          data: [],
          label: `${platform} O3 time`,
        };
      }
      if (enableSize) {
        seriesMap[getLineKey(platform, "O3", "size")] = {
          data: [],
          label: `${platform} O3 size`,
        };
      }
    }
    if (enableOz) {
      if (enablePerformance) {
        seriesMap[getLineKey(platform, "Oz", "time")] = {
          data: [],
          label: `${platform} Oz time`,
        };
      }
      if (enableSize) {
        seriesMap[getLineKey(platform, "Oz", "size")] = {
          data: [],
          label: `${platform} Oz size`,
        };
      }
    }
  }

  const getDate = (fileName: string) => {
    return fileName.split("/")[1].split("-")[0];
  };
  const getPlatform = (fileName: string) => {
    return fileName.split("/")[0];
  };

  const dateSet = new Set<string>();
  for (const fileName in data) {
    let hasMissingCases = false;
    for (const caseObj of data[fileName]) {
      const caseName = caseObj.name;
      if (isTestCaseDisabled(caseName)) {
        hasMissingCases = true;
        break;
      }
    }
    if (hasMissingCases) continue;
    const date = getDate(fileName);
    dateSet.add(date);
  }
  const xAxis = Array.from(dateSet).sort();
  const dateIndexMap: Record<string, number> = {};
  for (const lineKey in seriesMap) {
    seriesMap[lineKey].data.length = xAxis.length;
  }
  xAxis.forEach((date, index) => {
    dateIndexMap[date] = index;
    for (let k in seriesMap) {
      seriesMap[k].data[index] = k == "baseline" ? 1 : null;
    }
  });

  for (const fileName in data) {
    const platform = getPlatform(fileName);
    if (isPlatformDisabled(platform)) continue;
    const date = getDate(fileName);
    const index = dateIndexMap[date];

    const update = (mode: "O3" | "Oz", metric: "time" | "size") => {
      const lineKey = getLineKey(platform, mode, metric);
      seriesMap[lineKey].data[index] = 0;
      let total = 0;
      let cnt = 0;
      for (const caseObj of data[fileName]) {
        const caseName = caseObj.name;
        if (isTestCaseDisabled(caseName)) continue;
        total += caseObj.results.active[mode][metric];
        cnt++;
      }
      seriesMap[lineKey].data[index] = total / cnt;
    };

    if (enableO3) {
      if (enablePerformance) {
        update("O3", "time");
      }
      if (enableSize) {
        update("O3", "size");
      }
    }
    if (enableOz) {
      if (enablePerformance) {
        update("Oz", "time");
      }
      if (enableSize) {
        update("Oz", "size");
      }
    }
  }
  return {
    xAxis: [
      {
        scaleType: "band",
        data: xAxis,
      },
    ],
    yAxis: [
      {
        min: 0,
      },
    ],
    series: Object.values(seriesMap),
  };
}
