import React, { FC, useState } from "react";
import styled from "styled-components";

import { colors, bps } from "../../shared/variables";
import { pxToRem } from "../../shared/style-utils";

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${pxToRem(35)} ${pxToRem(26)};
  width: 100%;
  max-width: ${pxToRem(768)};
  height: ${pxToRem(520)};
  margin-top: ${pxToRem(48)};

  @media (min-width: ${bps.md}) {
    grid-template: repeat(5, 1fr) / repeat(5, 1fr);
  }
`;

const GridItem = styled.div<{ mdGridArea: string }>`
  position: relative;
  background: ${colors.purple3};

  &.showcase-item-show {
    z-index: 2;
  }

  &.showcase-item-hide {
    z-index: 2;
  }

  &.showcase-item-normal {
    z-index: 1;
  }

  @media (min-width: ${bps.md}) {
    grid-area: ${props => props.mdGridArea};
  }
`;

type Props = {
  projects: GithubProject[];
};

type GithubProject = {
  name: string;
  description: string;
  link: string;
  preview: string;
  position: number;
};

enum BLOCK_STATE {
  SHOW = "showcase-item-show",
  HIDE = "showcase-item-hide",
  NORMAL = "showcase-item-normal",
}

export const ProjectsGrid: FC<Props> = () => {
  const [gridBlockStates, setGridBlockStates] = useState({
    leftTop: BLOCK_STATE.NORMAL,
    rightTop: BLOCK_STATE.NORMAL,
    leftBottom: BLOCK_STATE.NORMAL,
    rightBottom: BLOCK_STATE.NORMAL,
  });

  function handleClick(
    blockPosition: "leftTop" | "rightTop" | "leftBottom" | "rightBottom"
  ): void {
    if (
      [BLOCK_STATE.NORMAL, BLOCK_STATE.HIDE].includes(
        gridBlockStates[blockPosition]
      )
    ) {
      setGridBlockStates({
        ...gridBlockStates,
        [blockPosition]: BLOCK_STATE.SHOW,
      });
    } else {
      setGridBlockStates({
        ...gridBlockStates,
        [blockPosition]: BLOCK_STATE.HIDE,
      });

      setTimeout(() => {
        setGridBlockStates({
          ...gridBlockStates,
          [blockPosition]: BLOCK_STATE.NORMAL,
        });
      }, 600);
    }
  }

  return (
    <Grid>
      <GridItem
        style={{ background: "red" }}
        onClick={() => handleClick("leftTop")}
        className={gridBlockStates.leftTop}
        mdGridArea="1 / 1 / 4 /4"
      ></GridItem>
      <GridItem
        style={{ background: "blue" }}
        onClick={() => handleClick("rightTop")}
        className={gridBlockStates.rightTop}
        mdGridArea="1 / 4 / 4 / 6"
      ></GridItem>
      <GridItem
        style={{ background: "green" }}
        onClick={() => handleClick("leftBottom")}
        className={gridBlockStates.leftBottom}
        mdGridArea="4 / 1 / 6 / 3"
      ></GridItem>
      <GridItem
        onClick={() => handleClick("rightBottom")}
        className={gridBlockStates.rightBottom}
        mdGridArea="4 / 3 / 6 / 6"
      ></GridItem>
    </Grid>
  );
};
