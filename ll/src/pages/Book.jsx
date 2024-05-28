import NavBar from "../components/NavBar";
import BookingForm from "../components/BookingForm";

const availableTimes = {
  times: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
}

const Book = () => {
  return (
    <div>
      <NavBar/>
      <BookingForm/>
    </div>
  );
};

export default Book;