import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";

import { bps } from "../../shared/variables";

const PersonSVG = styled.svg`
  width: 300px;
  height: 200px;

  @media (min-width: ${bps.sm}) {
    height: 300px;
  }

  @media (min-width: ${bps.md}) {
    order: 2;
    width: 462px;
    height: 350px;
  }

  // For grid reference see - /src/partials/index/hero.tsx
  @media (min-width: ${bps.xl}) {
    grid-area: 2 / 4 / span 3 / span 2;
  }
`;

export const CodePersonSVG = () => {
  useEffect(() => {
    let rects = Array.from(document.querySelectorAll("rect"));
    rects = rects.slice(1, rects.length - 1);

    // Create a timeline
    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 380,
      loop: true,
    });

    // Animate forwards
    rects.forEach(rect =>
      tl.add({
        targets: rect,
        width: [0, rect.width.baseVal.valueAsString],
      })
    );

    // Animate backwards
    rects.forEach(rect =>
      tl.add({
        targets: rect,
        width: 0,
      })
    );
  }, []);

  return (
    <PersonSVG
      id="e4bbe722-77af-4dff-9d23-13f94132c30a"
      data-name="Layer 1"
      width="662.60974"
      height="499.74762"
      viewBox="0 0 662.60974 499.74763"
      version="1.1"
    >
      <defs id="defs1110" />
      <polygon
        points="443.344,225.41 458.344,218.41 462.344,211.41 442.344,207.41 440.344,217.41 "
        id="polygon1041"
        transform="translate(-259.11014,-149.40953)"
        style={{ fill: "#292561" }}
      />
      <polygon
        points="443.344,225.41 458.344,218.41 462.344,211.41 442.344,207.41 440.344,217.41 "
        id="polygon1043"
        transform="translate(-259.11014,-149.40953)"
        style={{ opacity: "0.2" }}
      />
      <circle
        cx="187.73378"
        cy="38.500034"
        r="26"
        id="circle1045"
        style={{ fill: "#ffb8b8" }}
      />
      <polygon
        points="424.844,187.91 403.844,222.91 434.844,240.91 450.844,203.91 "
        id="polygon1047"
        transform="translate(-259.11014,-149.40953)"
        style={{ fill: "#ffb8b8" }}
      />
      <path
        d="m 163.73381,79.500033 -27,-11 c 0,0 -41.000004,7 -45.000004,20 -4,12.999997 -4,117.999997 -4,117.999997 0,0 -10,26 4,27 0,0 -4,6 0,7 4,1 45.000004,0 61.000004,5 16,5 48,9 48,4 v -9 c 0,0 7,-7 3,-19 -4,-12 -9,-38 -9,-38 0,0 30,-66 27,-74 -3,-8 -39.627,-32.737517 -39.627,-32.737517 z"
        id="path1049"
        style={{ fill: "#292561" }}
      />
      <polygon
        points="360.844,355.91 361.844,363.91 375.844,346.91 370.844,346.91 "
        id="polygon1051"
        transform="translate(-259.11014,-149.40953)"
        style={{ fill: "#ffb8b8" }}
      />
      <path
        d="m 163.73381,79.500033 -29,-7 c 0,0 -6,-5 -6,-11 0,-6 9,-15 15,-21 a 5.53494,5.53494 0 0 1 4.02,-1.67005 c 5.94,-0.05 13.14,7.74006 13.14,7.74006 l -7.99,13.32995 -0.36,0.59 z"
        id="path1053"
        style={{ fill: "#292561" }}
      />
      <path
        d="m 186.08681,67.558723 17.147,-5.55869 c 0,0 5.5,21.5 -0.5,22.5 -6,1 -39,-2 -39,-2 z"
        id="path1055"
        style={{ fill: "#292561" }}
      />
      <path
        d="m 93.733806,235.50003 -13,74 c 0,0 -5,9 -3,13 2,4 3,4 0,6 -3,2 -7,0 -6,5 a 51.04342,51.04342 0 0 1 1,9 l -28,96 c 0,0 -18,8 -5,13 13,5 26,9 29,4 3,-5 0,-11 0,-11 l 46.000004,-110 c 0,0 7,-10 7,-16 0,-6 23,-49 23,-49 0,0 1,43 2,46 1,3 -2,9 -2,13 0,4 -2,4 0,6 2,2 2,25 2,25 0,0 -12,89 -5,90 7,1 27,-1 27,-5 0,-4 -3,-5 -3,-5 l 13,-76 c 0,0 -1,-5 1,-9 2,-4 2,-4 2,-6 0,-2 -1,-3 0,-4 a 4.93754,4.93754 0 0 0 1,-3 c 0,0 -2,-6 -1,-7 1,-1 23,-76 16,-85 -7,-9 -104.000004,-14 -104.000004,-14 z"
        id="path1057"
        style={{ fill: "#2f2e41" }}
      />
      <path
        d="m 142.73381,446.50003 -7,16 c 0,0 -16,18 -4,22 12,4 16,3 16,3 0,0 5,1 5,3 0,2 40,17 43,4 3,-13 -31,-37 -31,-37 v -12 z"
        id="path1059"
        style={{ fill: "#2f2e41" }}
      />
      <path
        d="m 65.599086,453.90614 1.51424,17.39847 c 0,0 9.40163,22.17227 -3.24739,22.12362 -12.64902,-0.0486 -16.119,-2.2756 -16.119,-2.2756 0,0 -5.05717,-0.65191 -5.69692,1.243 -0.63975,1.89491 -43.33621,3.31188 -42.02020998,-9.96472 C 1.345806,469.15431 41.236396,457.29097 41.236396,457.29097 l 3.83841,-11.36952 z"
        id="path1061"
        style={{ fill: "#2f2e41" }}
      />
      <path
        d="m 162.40992,45.617603 c 1.606,-0.10777 2.67686,-1.85837 3.12129,-3.5239 0.44443,-1.66553 0.55756,-3.49031 1.46479,-4.92153 2.486,-3.92181 8.95008,-2.33769 11.57509,-6.153 1.61443,-2.34646 1.27653,-6.16723 3.60711,-7.66021 1.47173,-0.9428 3.34776,-0.45722 4.96944,0.13509 a 54.30716,54.30716 0 0 1 17.11591,10.19386 l 2.08805,-1.70011 2.6083,5.21428 c 1.01118,-1.21946 2.96144,-0.274 3.81,1.08163 0.84856,1.35563 1.2604,3.0882 2.47038,4.0756 1.92859,1.5738 4.94138,0.24083 6.10956,-2.0413 1.16818,-2.28213 0.97537,-5.072 0.57046,-7.6412 a 54.73664,54.73664 0 0 0 -6.34849,-18.32183 l 2.38634,-1.43177 -3.08517,-0.44062 1.1807,-2.6787504 -3.23175,-0.0378 1.27614,-2.28985 c -4.34441,1.49085 -8.8338,-1.23972 -12.98317,-3.27543 -6.94067,-3.40513004 -14.74842,-5.03925004 -22.28433,-3.77426004 A 28.16811,28.16811 0 0 0 159.77708,12.803233 c -3.28584,5.166 -5.18305,12.66746 -3.54049,18.854 1.49301,5.62336 8.01137,6.49864 6.17333,13.96035 z"
        id="path1063"
        style={{ fill: "#2f2e41" }}
      />
      <path
        d="m 97.733806,84.500033 c 0,0 -6,-1 -10,7 -4,8 -34,71.999997 -19,91.999997 15,20 29,26 29,26 l 3.000004,1 15,-16 -5,-7 c 0,0 0,-7 -4,-8 -4,-1 -4,2 -5,-2 -1,-4 4,-1 -1,-5 -5.000004,-4 -1.000004,-6 -1.000004,-6 z"
        id="path1065"
        style={{ fill: "#292561" }}
      />
      <polygon
        points="462.844,367.41 461.844,375.41 447.844,358.41 452.844,358.41 "
        id="polygon1067"
        transform="translate(-259.11014,-149.40953)"
        style={{ fill: "#ffb8b8" }}
      />
      <path
        d="m 202.23381,106.00003 c 0,0 14,-6.999997 18,1 4,8 31.5,68 16.5,88 -15,20 -29,26 -29,26 l -3,1 -15,-16 5,-7 c 0,0 0,-7 4,-8 4,-1 4,2 5,-2 1,-4 -4,-1 1,-5 5,-4 1,-6 1,-6 z"
        id="path1069"
        style={{ fill: "#292561" }}
      />
      <polygon
        points="366.344,273.41 355.344,317.41 368.344,333.41 362.344,313.41 "
        id="polygon1071"
        transform="translate(-259.11014,-149.40953)"
        style={{ opacity: "0.2" }}
      />
      <path
        d="m 160.89381,46.570043 -7.99,13.32995 c -5.02,-1.74 -5.44,-13.38995 -5.15,-21.07 5.94,-0.05 13.14,7.74005 13.14,7.74005 z"
        id="path1073"
        style={{ opacity: "0.2" }}
      />
      <rect
        x="265.85782"
        y="130.40118"
        width="396.75192"
        height="202"
        id="rect1081"
        style={{ fill: "#3f3d56" }}
      />
      <rect
        className="kek"
        x="337.83493"
        y="198.41931"
        width="40.179779"
        height="3.34831"
        id="rect1083"
        style={{ fill: "#ffffff" }}
      />
      <rect
        x="391.40799"
        y="198.41931"
        width="40.179779"
        height="3.34831"
        id="rect1085"
        style={{ fill: "#ffffff" }}
      />
      <rect
        x="469.25626"
        y="229.39124"
        width="40.179779"
        height="3.34831"
        id="rect1087"
        style={{ fill: "#ffffff" }}
      />
      <rect
        x="523.66638"
        y="229.39124"
        width="40.179779"
        height="3.34831"
        id="rect1089"
        style={{ fill: "#ffffff" }}
      />
      <rect
        x="445.81808"
        y="198.41931"
        width="118.02809"
        height="3.34831"
        id="rect1091"
        style={{ fill: "#ffffff" }}
      />
      <rect
        x="337.83493"
        y="229.39124"
        width="118.02809"
        height="3.34831"
        id="rect1093"
        style={{ fill: "#ffffff" }}
      />
      <rect
        x="337.83493"
        y="260.36316"
        width="118.02809"
        height="3.34831"
        id="rect1095"
        style={{ fill: "#ffffff" }}
      />
      <rect
        x="481.81247"
        y="260.36316"
        width="82.033707"
        height="3.34831"
        id="rect1097"
        style={{ fill: "#ffffff" }}
      />
      <polygon
        points="577.172,347.829 588.48,359.136 585.652,361.964 571.516,347.829 585.652,333.693 588.48,336.521 "
        id="polygon1099"
        style={{ fill: "#ffffff" }}
        transform="translate(-259.11014,-149.40953)"
      />
      <polygon
        points="861.036,398.985 875.172,413.12 861.036,427.257 858.208,424.429 869.516,413.12 858.208,401.813 "
        id="polygon1101"
        style={{ fill: "#ffffff" }}
        transform="translate(-259.11014,-149.40953)"
      />
      <rect
        x="-96.803154"
        y="634.00104"
        width="28.863609"
        height="4.0000601"
        transform="rotate(-73.13998)"
        id="rect1103"
        style={{ fill: "#ffffff" }}
      />
    </PersonSVG>
  );
};
