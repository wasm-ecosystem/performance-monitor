import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Checkbox, Grid } from "@mui/material";
import { fetchData, BenchResult, toLineChartProps } from "./render";

const App = () => {
  const [enableDarwinArm64, setEnableDarwinArm64] = React.useState(true);
  const [enableLinuxX64, setEnableLinuxX64] = React.useState(true);
  const [enableLinuxArm64, setEnableLinuxArm64] = React.useState(true);

  const [enableO3, setEnableO3] = React.useState(false);
  const [enableOz, setEnableOz] = React.useState(true);

  const [enablePerformance, setEnablePerformance] = React.useState(true);
  const [enableSize, setEnableSize] = React.useState(false);

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
        </Grid>{" "}
        <Grid>
          <Checkbox
            checked={enableLinuxArm64}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setEnableLinuxArm64(checked)}
          />
          <span>linux-arm64</span>
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
      <Grid container spacing={2}>
        <Grid>
          <Checkbox
            checked={enablePerformance}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setEnablePerformance(checked)}
          />
          <span>performance</span>
        </Grid>
        <Grid>
          <Checkbox
            checked={enableSize}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setEnableSize(checked)}
          />
          <span>jit size</span>
        </Grid>
      </Grid>
      <LineChart
        {...toLineChartProps(data, {
          enableDarwinArm64,
          enableLinuxX64,
          enableLinuxArm64,
          enableO3,
          enableOz,
          enablePerformance,
          enableSize,
        })}
        height={300}
      />
    </div>
  );
};

export default App;
