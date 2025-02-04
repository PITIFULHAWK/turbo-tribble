interface Trip {
  id: string
  from: string
  to: string
  date: string
  time: string
  userType: "rider" | "pillion"
}

interface TripResultsProps {
  trips: Trip[]
  onRequestTrip: (tripId: string) => void
}

export default function TripResults({ trips, onRequestTrip }: TripResultsProps) {
  return (
    <div>
      {trips.length === 0 ? (
        <p>No trips found</p>
      ) : (
        <ul>
          {trips.map((trip) => (
            <li key={trip.id} className="border p-2 my-2">
              <p>
                <strong>From:</strong> {trip.from} → <strong>To:</strong> {trip.to}
              </p>
              <p>
                <strong>Date:</strong> {trip.date} <strong>Time:</strong> {trip.time}
              </p>
              <p>
                <strong>Type:</strong> {trip.userType}
              </p>
              <button
                onClick={() => onRequestTrip(trip.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              >
                Request Trip
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
