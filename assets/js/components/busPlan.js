import { myFetch } from "../utils/apiUtils.js";

/**
 * busPlan component
 */
export const busPlan = async () => {
  const container = document.getElementById("busPlan");

  const endpoint =
    "https://xmlopen.rejseplanen.dk/bin/rest.exe/multiDepartureBoard?id1=851400602&id2=851973402&rttime&format=json&useBus=1";
  const apiData = await myFetch(endpoint);
  const slicedData = apiData.MultiDepartureBoard?.Departure.slice(0, 5);

  const ul = document.createElement("ul");
  const liLine = document.createElement("li");
  liLine.innerText = "Linje";
  const liStop = document.createElement("li");
  liStop.innerText = "Stop";
  const liTime = document.createElement("li");
  liTime.innerText = "Tid";

  ul.append(liLine, liStop, liTime)
  container.append(ul)

  /**
   * LOOP
   */
  if (slicedData) {
    slicedData.map((value, index) => {
      const ul = document.createElement("ul");
      ul.classList.add("busPlan");

      const liLine = document.createElement("li");
      liLine.innerText = value.line;

      const liStop = document.createElement("li");
      liStop.innerText = value.stop;

      const liTime = document.createElement("li");
      liTime.innerText = value.time;

      ul.append(liLine, liStop, liTime);
      console.log(value.name, index);
      container.append(ul);
    });
  }
};
