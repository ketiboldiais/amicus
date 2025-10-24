import { Img } from "@/components/Img";

import average_rate_of_change from "../../public/diagrams/average_rate_of_change.svg";
import one_over_x_plot from "../../public/diagrams/one_over_x_plot.svg";
import real_line_approaching from "../../public/diagrams/real_line_approaching.svg";
import tangent_line from "../../public/diagrams/tangent_line.svg";

export const AVERAGE_RATE_OF_CHANGE = () => (
  <Img width={300} url={average_rate_of_change} alt="Average rate of change" />
);



export const ONE_OVER_X_PLOT = () => (
  <Img width={250} url={one_over_x_plot} alt="Plot of one over x" />
);

export const REAL_LINE_APPROACHING = () => (
  <Img width={300} url={real_line_approaching} alt="Real line" />
)


export const TANGENT_LINE = () => (
  <Img width={300} url={tangent_line} alt="Tangent line." />
);

