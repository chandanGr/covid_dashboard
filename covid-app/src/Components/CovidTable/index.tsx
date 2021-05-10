import React, { useEffect, useState } from "react";
import { ITableBodyItems } from "../../Interfaces/common";
import AlbumRepoTable from "../AlbumRepoTable";
import { tempHeaderList } from "./Constants";

interface ISession {
  available_capacity: number;
  date: string;
  min_age_limit: number;
  session_id: string;
  slots: string[];
  vaccine: string;
}

interface ICenter {
  address: string;
  block_name: string;
  center_id: number;
  district_name: string;
  fee_type: string;
  from: string;
  lat: number;
  long: number;
  name: string;
  pincode: number;
  sessions: ISession[];
  state_name: string;
  to: string;
}

interface ICovidTableProps {
  pinCodes: number[];
  date: string;
  vaccineAgeLimit: number;
  timeInterval: number;
  title?: string;
}

let showNotification = false;
function CovidTable(props: ICovidTableProps) {
  let [covidCenters, setCovidCenters] = useState<ITableBodyItems[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!props.date || !props.pinCodes) return;
    const interval = setInterval(() => {
      showNotification = true;
      const centers18: ITableBodyItems[] = [];
      setCounter((prevCounter: number) => {
        return prevCounter + 1;
      });
      props.pinCodes.forEach((pinCode) => {
        fetch(
          `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${props.date}`
        )
          .then((res) => {
            return res.json();
          })
          .then((centers) => {
            centers.centers.map((center: ICenter) => {
              center.sessions &&
                center.sessions.map((session, index) => {
                  if (
                    session.min_age_limit === props.vaccineAgeLimit &&
                    session.available_capacity > 0
                  ) {
                    centers18.push({
                      key: index.toString(),
                      name: center.name,
                      address: center.address,
                      pincode: center.pincode.toString(),
                      district: center.district_name,
                      vaccine: session.vaccine,
                      availableCapacity: session.available_capacity.toString(),
                    });
                  }
                });
            });
            setCovidCenters([...covidCenters, ...centers18]);
          });
      });
    }, props.timeInterval);
    return () => {
      interval && clearInterval(interval);
    };
  }, [props.pinCodes, props.date]);

  if (covidCenters.length > 0 && showNotification) {
    new Notification("Covid Notification API", {
      body: "please check now",
      vibrate: 10,
    });
    showNotification = false;
  }

  return (
    <div className="covidTable">
      {counter}
      <div className="covidTable__title">
        {props.title} -- {covidCenters.length} rows
      </div>
      <AlbumRepoTable
        showTableHeader={true}
        dataList={covidCenters}
        headerList={tempHeaderList}
        dataClassname={"covidTable__body"}
      />
    </div>
  );
}

export default CovidTable;
