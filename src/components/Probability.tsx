import sample_space_1 from "../../public/diagrams/sample_space_1.svg"
import tetrahedral_roll_1 from "../../public/diagrams/tetrahedral_roll_1.svg";
import tetrahedral_tree from "../../public/diagrams/tetrahedral_tree.svg";
import rectangle_target from "../../public/diagrams/rectangle_target.svg";
import { Img } from "@/components/Img";

export const SAMPLE_SPACE_1 = () => (
    <figure style={{
        float: 'right',
        width: 'fit-content',
    }}>
        <Img width={100} url={sample_space_1} alt="Sample space"/>
        <figcaption>A sample space with two outcomes, <i>heads</i> and <i>tails</i>.</figcaption>
    </figure>
) 


export const TETRAHEDRAL_ROLL_1 = () => (
  <Img width={150} url={tetrahedral_roll_1} alt="Tetrahedral roll grid diagram." />
); 


export const TETRAHEDRAL_TREE = () => (
  <figure
    style={{
    //   float: "right",
      width: "fit-content",
    }}
  >
    <Img
      width={110}
      url={tetrahedral_tree}
      alt="Tetrahedral roll tree diagram."
    />
    <figcaption>A tree diagram of two tetradral die rolls.</figcaption>
  </figure>
); 

export const RECTANGLE_TARGET = () => (
  <Img width={130} url={rectangle_target} alt="Square target." />
); 