import { Img } from "@/components/Img";

import average_rate_of_change from "../../public/diagrams/average_rate_of_change.svg";
import one_over_x_plot from "../../public/diagrams/one_over_x_plot.svg";

export const Average_Rate_of_Change = () => (
  <Img width={300} url={average_rate_of_change} alt="Average rate of change" />
);


export const One_Over_X_Plot = () => (
  <Img width={250} url={one_over_x_plot} alt="Average rate of change" />
);

