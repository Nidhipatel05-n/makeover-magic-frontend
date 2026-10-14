import React, { useEffect, useState } from "react";
const API_URL = "http://localhost:8080/api/bookings";
function Booking() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);

  async function loadBookings() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Could not load bookings");

      const data = await response.json();
      setBookings(Array.isArray(data) ? data : []);
      setError("");
    } catch {
      setError("Could not load bookings. Check that the backend is running.");
    }
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const booking = {
      customerName: data.get("fullName"),
      email: data.get("email"),
      service: data.get("service"),
      artist: data.get("artist") || "Any available artist",
      appointmentDate: data.get("date"),
      appointmentTime: data.get("time"),
      status: "Pending"
    };

    try {
      const response = await fetch(
        editingId === null ? API_URL : `${API_URL}/${editingId}`,
        {
          method: editingId === null ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(booking)
        }
      );

      if (!response.ok) throw new Error("Save failed");

      form.reset();
      setEditingId(null);
      await loadBookings();
    } catch {
      setError("Could not save booking. Check the backend terminal.");
    } finally {
      setSaving(false);
    }
  }

  function editBooking(booking) {
    setEditingId(booking.id);
    setError("");

    const form = document.querySelector(".booking-form");
    if (!form) return;

    form.elements.fullName.value = booking.customerName || "";
    form.elements.email.value = booking.email || "";
    form.elements.service.value = booking.service || "";
    form.elements.artist.value = booking.artist || "";
    form.elements.date.value = String(booking.appointmentDate || "").slice(0, 10);
    form.elements.time.value = String(booking.appointmentTime || "").slice(0, 5);

    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function cancelEdit() {
    setEditingId(null);
    document.querySelector(".booking-form")?.reset();
    setError("");
  }

  async function deleteBooking(id) {
    if (!window.confirm("Are you sure you want to delete this booking?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) throw new Error("Delete failed");

      if (editingId === id) cancelEdit();
      await loadBookings();
    } catch {
      setError("Could not delete booking. Check the backend terminal.");
    }
  }

  return (
    <div className="booking-page">
      <section className="booking-section">
        <div className="booking-heading">
          <p className="eyebrow">BEAUTY · STYLE · CONFIDENCE</p>
          <h1>Book Your <span>Makeover</span></h1>
          <p>
            Choose your preferred service, artist, date and time.
            We look forward to making you feel beautiful!
          </p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" name="fullName" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select id="service" name="service" defaultValue="" required>
              <option value="" disabled>Choose a service</option>
              <option value="makeup">Professional Makeup</option>
              <option value="hair">Hair Styling</option>
              <option value="nails">Nail Care</option>
              <option value="bridal">Bridal Makeover</option>
              <option value="skincare">Skincare</option>
              <option value="package">Complete Makeover Package</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="artist">Preferred Artist</label>
            <select id="artist" name="artist" defaultValue="">
              <option value="">Any available artist</option>
              <option value="ananya">Ananya Sharma</option>
              <option value="priya">Priya Verma</option>
              <option value="meera">Meera Patel</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              id="date"
              name="date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <select id="time" name="time" defaultValue="" required>
              <option value="" disabled>Choose a time</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>

          <button className="primary-button" type="submit" disabled={saving}>
            {saving ? "Saving..." : editingId === null ? "Submit Booking Request" : "Update Booking"}
          </button>

          {editingId !== null && (
            <button className="primary-button" type="button" onClick={cancelEdit}>
              Cancel Edit
            </button>
          )}
        </form>

        {error && <p className="booking-error" role="alert">{error}</p>}

        <div className="saved-bookings">
          <h2>Saved Bookings</h2>

          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            bookings.map((booking) => (
              <div className="saved-booking" key={booking.id}>
                <h3>{booking.customerName}</h3>
                <p>Email: {booking.email}</p>
                <p>Service: {booking.service}</p>
                <p>Artist: {booking.artist}</p>
                <p>Date: {String(booking.appointmentDate || "").slice(0, 10)}</p>
                <p>Time: {String(booking.appointmentTime || "").slice(0, 5)}</p>
                <p>Status: {booking.status}</p>

                <button type="button" className="primary-button" onClick={() => editBooking(booking)}>
                  Edit
                </button>
                <button type="button" className="primary-button" onClick={() => deleteBooking(booking.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Booking;