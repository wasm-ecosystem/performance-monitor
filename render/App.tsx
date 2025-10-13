import React, { useEffect } from "react";
import { LineChart, LineChartProps } from "@mui/x-charts/LineChart";
import { Checkbox, Grid } from "@mui/material";

type BenchExecuteResult = {
  time: number;
  size: number;
};
type BenchModeResult = {
  O3: BenchExecuteResult;
  Oz: BenchExecuteResult;
};
type BenchResult = {
  name: string;
  results: {
    active: BenchModeResult;
    passive: BenchModeResult;
  };
};

async function fetchData(setData: React.Dispatch<Record<string, BenchResult[]>>) {
  const lists = await (await fetch("/lists")).text();

  let data: Record<string, BenchResult[]> = {};
  for (const line of lists.split("\n")) {
    if (!line) continue;
    const res = await (await fetch(line)).json();
    data[line] = res;
  }
  setData(data);
}

function toLineChartProps(
  data: Record<string, BenchResult[]>,
  {
    enableDarwinArm64,
    enableLinuxX64,
    enableO3,
    enableOz,
  }: { enableDarwinArm64: boolean; enableLinuxX64: boolean; enableO3: boolean; enableOz: boolean }
): LineChartProps {
  if (!enableO3 && !enableOz) return { xAxis: [], series: [] };

  const xAxis: string[] = [];
  const seriesMap: Record<string, { data: number[]; label?: string }> = {};

  for (const key in data) {
    const platform = key.split("/")[0];
    if (platform === "darwin-arm64" && !enableDarwinArm64) continue;
    if (platform === "linux-x64" && !enableLinuxX64) continue;
    const date = key.split("/")[1].split("-")[0];

    const name = data[key][0].name;

    xAxis.push(date);
    if (enableO3) {
      seriesMap[`${platform}-${name}-O3-time`] = seriesMap[`${platform}-${name}-O3-time`] ?? {
        data: [],
        label: `${platform} ${name} O3 time`,
      };
      seriesMap[`${platform}-${name}-O3-time`].data.push(data[key][0].results.active.O3.time);
      seriesMap[`${platform}-${name}-O3-size`] = seriesMap[`${platform}-${name}-O3-size`] ?? {
        data: [],
        label: `${platform} ${name} O3 size`,
      };
      seriesMap[`${platform}-${name}-O3-size`].data.push(data[key][0].results.active.O3.size);
    }
    if (enableOz) {
      seriesMap[`${platform}-${name}-Oz-time`] = seriesMap[`${platform}-${name}-O3-time`] ?? {
        data: [],
        label: `${platform} ${name} Oz time`,
      };
      seriesMap[`${platform}-${name}-Oz-time`].data.push(data[key][0].results.active.Oz.time);
      seriesMap[`${platform}-${name}-Oz-size`] = seriesMap[`${platform}-${name}-O3-size`] ?? {
        data: [],
        label: `${platform} ${name} Oz size`,
      };
      seriesMap[`${platform}-${name}-Oz-size`].data.push(data[key][0].results.active.Oz.size);
    }
  }

  return {
    xAxis: [{ data: xAxis }],
    series: Object.values(seriesMap),
  };
}

const App = () => {
  const [enableDarwinArm64, setEnableDarwinArm64] = React.useState(true);
  const [enableLinuxX64, setEnableLinuxX64] = React.useState(true);

  const [enableO3, setEnableO3] = React.useState(false);
  const [enableOz, setEnableOz] = React.useState(true);

  const [data, setData] = React.useState<Record<string, BenchResult[]>>({});

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid>
          <Checkbox
            checked={enableDarwinArm64}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setEnableDarwinArm64(checked)}
          />
          <span>darwin-arm64</span>
        </Grid>
        <Grid>
          <Checkbox
            checked={enableLinuxX64}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setEnableLinuxX64(checked)}
          />
          <span>linux-x64</span>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid>
          <Checkbox
            checked={enableO3}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setEnableO3(checked)}
          />
          <span>O3</span>
        </Grid>
        <Grid>
          <Checkbox
            checked={enableOz}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setEnableOz(checked)}
          />
          <span>Oz</span>
        </Grid>
      </Grid>

      <LineChart {...toLineChartProps(data, { enableDarwinArm64, enableLinuxX64, enableO3, enableOz })} height={300} />
    </div>
  );
};

export default App;
