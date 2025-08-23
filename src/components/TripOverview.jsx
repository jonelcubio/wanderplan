export default function TripOverview() {
  console.log('TripOverview loaded');
  return(
    <main className="trip-overview-main">
      <div className="trip-overview-title">Trip Overview</div>

      <div className="trip-overview-con">
        <div className="trip-trip-title">Trip Title:</div>
        <input type="text" name="trip-title" id="trip-title" className="trip-trip-input" placeholder="My Trip Title"/>
        </div>
    </main>
  );
}