import { useLocation, useNavigate } from "react-router-dom";
import { useAppointment } from "../context/AppointmentContext";

function Receipt() {
  const { appointment } = useAppointment();
  const location = useLocation();
  const navigate = useNavigate();

  const paymentMethod =
    location.state?.paymentMethod || "UPI";

  const receiptId =
    `NK-${Date.now().toString().slice(-8)}`;

  if (!appointment) {
    return (
      <main className="receipt-page">
        <section className="receipt-card">
          <div className="receipt-empty">
            <h1>Receipt Not Available</h1>

            <p>
              Appointment details could not be found.
            </p>

            <button
              className="receipt-button"
              onClick={() => navigate("/appointment")}
            >
              Book Appointment
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="receipt-page">
      <section className="receipt-card">

        {/* SUCCESS */}
        <div className="receipt-success">

          <div className="receipt-success-icon">
            ✓
          </div>

          <span>PAYMENT SUCCESSFUL</span>

          <h1>Appointment Confirmed</h1>

          <p>
            Your appointment payment of ₹50
            has been successfully processed.
          </p>

        </div>

        {/* HOSPITAL */}
        <div className="receipt-hospital">
          <strong>NK HOSPITAL</strong>

          <span>
            Your Health, Our Priority
          </span>
        </div>

        <div className="receipt-divider"></div>

        {/* RECEIPT INFO */}
        <div className="receipt-info">

          <div>
            <span>Receipt ID</span>
            <strong>{receiptId}</strong>
          </div>

          <div>
            <span>Payment Method</span>
            <strong>{paymentMethod}</strong>
          </div>

        </div>

        {/* APPOINTMENT */}
        <div className="receipt-section">

          <h2>Appointment Details</h2>

          <div className="receipt-details">

            <div>
              <span>Patient Name</span>
              <strong>
                {appointment.patientName}
              </strong>
            </div>

            <div>
              <span>Phone Number</span>
              <strong>
                {appointment.phone}
              </strong>
            </div>

            <div>
              <span>Appointment Date</span>
              <strong>
                {appointment.date}
              </strong>
            </div>

            <div>
              <span>Appointment Time</span>
              <strong>
                {appointment.time}
              </strong>
            </div>

            {appointment.reason && (
              <div>
                <span>Reason for Visit</span>
                <strong>
                  {appointment.reason}
                </strong>
              </div>
            )}

          </div>

        </div>

        {/* PAYMENT */}
        <div className="receipt-section">

          <h2>Payment Details</h2>

          <div className="receipt-payment-row">
            <span>Appointment Fee</span>

            <strong>₹50</strong>
          </div>

          <div className="receipt-payment-total">
            <span>Total Paid</span>

            <strong>₹50</strong>
          </div>

        </div>

        {/* FOOTER */}
        <div className="receipt-footer">

          <p>
            Thank you for choosing NK Hospital.
          </p>

          <small>
            Please keep this receipt for your
            appointment reference.
          </small>

        </div>

        {/* ACTIONS */}
        <div className="receipt-actions">

          <button
            className="receipt-print-button"
            onClick={() => window.print()}
          >
            🖨 Print Receipt
          </button>

          <button
            className="receipt-home-button"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </section>
    </main>
  );
}

export default Receipt;