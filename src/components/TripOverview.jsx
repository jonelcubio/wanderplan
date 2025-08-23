export default function TripOverview() {
  console.log('TripOverview loaded');
  return(
    <main className="trip-overview-main">
      <div className="trip-overview-title">Trip Overview</div>

      <div className="trip-overview-con">
        <div className="trip-trip-title">Trip Title:</div>
        <input type="text" name="trip-title" id="trip-title" className="trip-trip-input" placeholder="Jonelle's First Vacation"/>
      </div>


      <div className="trip-overview-con">
        <div className="trip-destination">Destination:</div>
        <input type="text" name="trip-destination" id="trip-destination" className="trip-destination-input" placeholder="Philippines"/>
      </div>

      <div className="trip-overview-con">
        <div className="trip-dates">Dates:</div>
        <input type="date" name="trip-dates-start" id="trip-dates-start" className="trip-dates-start-input"/>
        <div className="trip-dates">to</div>
        <input type="date" name="trip-dates-end" id="trip-dates-end" className="trip-dates-end-input"/>
      </div>

    </main>
  );
}