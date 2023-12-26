import Image from "next/image";
import { useState } from "react";
import Script from "next/script";
import { randomBytes } from "crypto";

let door1Class = "door";
let door2Class = "door";
let door3Class = "door";

let reveal = 0;

let car = Math.floor(Math.random() * 3 + 1);

export default function montyHallProblem() {
  return (
    <>
      <div className="descriptionContainer">
        <h1 className="descriptionHeader"> The Monty Hall Problem</h1>
        <Image
          style={{ marginLeft: "300px", marginBottom: "50px" }}
          width={500}
          height={500}
          src={require("/public/threeDoors.png")}
          alt="Image of three doors"
        ></Image>
        <p className="description">
          The monty hall problem is a brain teaser that is loosely based on the
          American late night game show
          <a
            className="link"
            href="https://en.wikipedia.org/wiki/Let%27s_Make_a_Deal"
          >
            <i> Let&apos;s make a deal </i>
          </a>
          The premise of the game is that the contestant is presented with three
          different doors. Behind 1 of the 3 doors is a car ( or a gift / prize
          money of sorts), and behind the other two doors are goats. The
          contestant is asked to choose one of the doors. On picking a door, say
          door No.1, the host, who knows what lies behind each door, reveals
          another door, say door No.3, which has a goat. The contestant is then
          offered two options. They can either pick another one of the two doors
          that have not been revealed yet (door No.2, which has a car behind
          it.), or stick with their choice (door No.3).
        </p>
        <p className="description">
          Obviously, at first glance, the problem seems straightforward, you
          might think that changing your choice after the reveal wouldn&apos;t really
          make much of a difference. However, stastically, switching your
          choice, increases your chances of winning to 2/3 as opposed to the 1/3
          when you don&apos;t switch doors. To make things more understandable,
          here&apos;s a table that lists three possible scenarios that could play
          out. Assume that the contestant picks door No.1 in all scenarios.
        </p>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <b
                  style={{
                    backgroundColor: "rgb(126, 120, 244)",
                    color: "white",
                  }}
                >
                  {" "}
                  Door 1{" "}
                </b>
              </td>
              <td>
                <b>Door 2</b>
              </td>
              <td>
                <b>Door 3</b>
              </td>
              <td>
                <b>Contestant makes switch</b>
              </td>
              <td>
                <b>Contestant does not make switch</b>
              </td>
            </tr>
            <tr>
              <td>Goat</td>
              <td>Goat</td>
              <td>Car</td>
              <td>Win</td>
              <td>Loss</td>
            </tr>
            <tr>
              <td>Goat</td>
              <td>Car</td>
              <td>Goat</td>
              <td>Win</td>
              <td>Loss</td>
            </tr>
            <tr>
              <td>Car</td>
              <td>Goat</td>
              <td>Goat</td>
              <td>Loss</td>
              <td>Win</td>
            </tr>
          </tbody>
        </table>

        <p className="description" style={{ marginTop: "20px" }}>
          As you can see in the above table, in 2/3 of the scenarios the
          contestant wins a car when they switch their choice and in 1/3 of the
          scenarios the contestant wins a car when they don&apos;t switch their
          choice. The only scenario where switching choices backfires is if the
          contestant&apos;s original choice was the door with the car.
        </p>
        <p className="description">
          To help better understand the problem, here&apos;s a simulation of the
          problem in python. 
        </p>
        <br />
      </div>
    </>
  );
}
