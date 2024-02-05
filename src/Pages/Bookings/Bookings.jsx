import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const {user}= useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
      fetch(url)
          .then(res => res.json())
          .then(data =>setBookings(data))
  }, [url]);

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }
}


  
  return (
    <div>
    <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr className="text-stone-900 text-2xl">
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <th >Image</th>
                    <th >Service</th>
                    <th >Date</th>
                    <th >Price</th>
                    <th >Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        // handleBookingConfirm={handleBookingConfirm}
                    ></BookingRow>)
                }
            </tbody>

        </table>
    </div>
</div>

  );
};

export default Bookings;