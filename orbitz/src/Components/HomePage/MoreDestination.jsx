import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div style={{marginLeft:"5rem"}}>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Accordion
          style={{ width: "20rem", color: "black" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Top hotel Beach Destination</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div
                style={{ display: "flex", listStyle: "none", color: "blue" }}
              >
                <div>
                  <li>flight under $200</li>
                  <li>Travels Deals</li>
                  <li>Hotels under $100</li>
                  <li>Orbitz Hotel Coupon</li>
                  <li>All our Destination</li>
                </div>
                <div>
                  <li>Orbitz coupon</li>
                  <li>Car Rental Deals</li>
                  <li>Vacation Package Deals </li>
                  <li>Last Minute Travel Deals</li>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* 2nd  */}
        <Accordion
          style={{width: "20rem", color: "black" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Top Hotel Beach Destination</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div
                style={{ display: "flex", listStyle: "none", color: "blue" }}
              >
                <div>
                  <li>flight under $200</li>
                  <li>Travels Deals</li>
                  <li>Hotels under $100</li>
                  <li>Orbitz Hotel Coupon</li>
                  <li>All our Destination</li>
                </div>
                <div>
                  <li>Orbitz coupon</li>
                  <li>Car Rental Deals</li>
                  <li>Vacation Package Deals </li>
                  <li>Last Minute Travel Deals</li>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* 3rd */}
        <Accordion
          style={{width: "20rem", color: "black" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Top Hotel city Destination</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div
                style={{ display: "flex", listStyle: "none", color: "blue" }}
              >
                <div>
                  <li>flight under $200</li>
                  <li>Travels Deals</li>
                  <li>Hotels under $100</li>
                  <li>Orbitz Hotel Coupon</li>
                  <li>All our Destination</li>
                </div>
                <div>
                  <li>Orbitz coupon</li>
                  <li>Car Rental Deals</li>
                  <li>Vacation Package Deals </li>
                  <li>Last Minute Travel Deals</li>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <Accordion
          style={{width: "20rem", color: "black" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Top Vacation Destination</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div
                style={{ display: "flex", listStyle: "none", color: "blue" }}
              >
                <div>
                  <li>flight under $200</li>
                  <li>Travels Deals</li>
                  <li>Hotels under $100</li>
                  <li>Orbitz Hotel Coupon</li>
                  <li>All our Destination</li>
                </div>
                <div>
                  <li>Orbitz coupon</li>
                  <li>Car Rental Deals</li>
                  <li>Vacation Package Deals </li>
                  <li>Last Minute Travel Deals</li>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* 2nd  */}
        <Accordion
          style={{width: "20rem", color: "black" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Top Flight Destination</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div
                style={{ display: "flex", listStyle: "none", color: "blue" }}
              >
                <div>
                  <li>flight under $200</li>
                  <li>Travels Deals</li>
                  <li>Hotels under $100</li>
                  <li>Orbitz Hotel Coupon</li>
                  <li>All our Destination</li>
                </div>
                <div>
                  <li>Orbitz coupon</li>
                  <li>Car Rental Deals</li>
                  <li>Vacation Package Deals </li>
                  <li>Last Minute Travel Deals</li>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* 3rd */}
        <Accordion
          style={{width: "20rem", color: "black" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Top Car Rental Destination</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div
                style={{ display: "flex", listStyle: "none", color: "blue" }}
              >
                <div>
                  <li>flight under $200</li>
                  <li>Travels Deals</li>
                  <li>Hotels under $100</li>
                  <li>Orbitz Hotel Coupon</li>
                  <li>All our Destination</li>
                </div>
                <div>
                  <li>Orbitz coupon</li>
                  <li>Car Rental Deals</li>
                  <li>Vacation Package Deals </li>
                  <li>Last Minute Travel Deals</li>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
