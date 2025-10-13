import React, { useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Checkbox, Grid } from "@mui/material";
import { fetchData, BenchResult, toLineChartProps } from "./render";

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
