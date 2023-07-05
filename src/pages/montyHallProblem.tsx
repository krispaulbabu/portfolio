import Image from "next/image";
import Script from "next/script";

export default function montyHallProblem() {
  return (
    <>
      <div className="descriptionContainer">
        <h1 className="descriptionHeader"> The Monty Hall Problem</h1>
        <p className="description">
          The monty hall problem is a brain teaser that is loosely based on the
          American late night game show{" "}
          <a href="https://en.wikipedia.org/wiki/Let%27s_Make_a_Deal">
            <i>Let's make a deal </i>
          </a>
          The premise of the game is that the contestant is presented with three
          different doors. Behind 1 of the 3 doors is a car ( or a gift / prize
          money of sorts), and behind the other two doors are goats. The
          contestant is asked to choose one of the doors. On picking a door, say
          door No.1, the host, who knows what lies behind each door, reveals
          another door, say door No.3, which has a goat. The contestant is then
          offered two options. They can either pick another one of the two doors
          that have not been revealed yet (door No.2), or stick with their
          choice (door No.3).
        </p>
        <div className="doors">
          <Image
            width={500}
            height={500}
            src={require("/public/threeDoors.png")}
            alt="Image of three doors"
          ></Image>
        </div>
        <p className="description">
          Obviously, at first glance, the problem seems straightforward, you
          might think that changing your choice after the reveal wouldn't really
          make much of a difference. However, stastically, switching your
          choice, increases your chances of winning to 2/3 as
          opposed to the 1/3 when you don't switch doors.
        </p>
      </div>
    </>
  );
}
