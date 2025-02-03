import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Trip {
  id: string
  from: string
  to: string
  date: string
  time: string
  driver: string
  price: number
  distance: number
}

interface TripResultsProps {
  trips: Trip[]
  onRequestTrip: (tripId: string) => void
}

export default function TripResults({ trips, onRequestTrip }: TripResultsProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Available Trips</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Distance</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trips.map((trip) => (
            <TableRow key={trip.id}>
              <TableCell>{trip.from}</TableCell>
              <TableCell>{trip.to}</TableCell>
              <TableCell>{trip.date}</TableCell>
              <TableCell>{trip.time}</TableCell>
              <TableCell>{trip.driver}</TableCell>
              <TableCell>${trip.price.toFixed(2)}</TableCell>
              <TableCell>{trip.distance.toFixed(2)} km</TableCell>
              <TableCell>
                <Button onClick={() => onRequestTrip(trip.id)}>Request</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

