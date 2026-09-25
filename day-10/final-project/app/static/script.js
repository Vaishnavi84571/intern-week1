/* =====================================================
   SIDEBAR NAVIGATION
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =====================================================
   HYGIENE RISK PREDICTION
===================================================== */

async function predictRisk() {

    const resultIcon =
        document.getElementById("result-icon");

    const resultTitle =
        document.getElementById("result-title");

    const resultText =
        document.getElementById("result-text");


    /* ---------------------------------------------
       GET FORM VALUES
    --------------------------------------------- */

    const cleanliness =
        Number(
            document.getElementById(
                "cleanliness_score"
            ).value
        );


    const odor =
        Number(
            document.getElementById(
                "odor_score"
            ).value
        );


    const waste =
        Number(
            document.getElementById(
                "waste_level"
            ).value
        );


    const water =
        Number(
            document.getElementById(
                "water_availability"
            ).value
        );


    const footfall =
        Number(
            document.getElementById(
                "footfall"
            ).value
        );


    const complaints =
        Number(
            document.getElementById(
                "complaints"
            ).value
        );


    const hours =
        Number(
            document.getElementById(
                "hours_since_cleaning"
            ).value
        );


    const location =
        document.getElementById(
            "location"
        ).value;


    /* ---------------------------------------------
       VALIDATION
    --------------------------------------------- */

    if (
        cleanliness < 1 ||
        cleanliness > 10 ||

        odor < 1 ||
        odor > 10 ||

        waste < 1 ||
        waste > 10 ||

        footfall < 0 ||

        complaints < 0 ||

        hours < 1 ||
        hours > 48
    ) {

        resultIcon.className =
            "result-icon high";

        resultIcon.textContent = "!";

        resultTitle.textContent =
            "Invalid Input";

        resultText.textContent =
            "Please check the entered values and try again.";

        return;
    }


    /* ---------------------------------------------
       LOCATION ENCODING
    --------------------------------------------- */

    let locationUrban = 0;

    let locationSemiUrban = 0;


    if (location === "urban") {
        locationUrban = 1;
    }


    if (location === "semi-urban") {
        locationSemiUrban = 1;
    }


    /* ---------------------------------------------
       DATA FOR FLASK API
    --------------------------------------------- */

    const data = {

        cleanliness_score:
            cleanliness,

        odor_score:
            odor,

        waste_level:
            waste,

        water_availability:
            water,

        footfall:
            footfall,

        complaints:
            complaints,

        hours_since_cleaning:
            hours,

        inspection_year:
            new Date().getFullYear(),

        inspection_month:
            new Date().getMonth() + 1,

        inspection_day:
            new Date().getDate(),

        "location_Semi-Urban":
            locationSemiUrban,

        "location_Urban":
            locationUrban

    };


    /* ---------------------------------------------
       LOADING STATE
    --------------------------------------------- */

    resultIcon.className =
        "result-icon neutral";

    resultIcon.textContent =
        "...";

    resultTitle.textContent =
        "Analyzing...";

    resultText.textContent =
        "The AI model is evaluating the facility.";


    /* ---------------------------------------------
       SEND REQUEST TO FLASK
    --------------------------------------------- */

    try {

        const response =
            await fetch(
                "/predict",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(data)

                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.error ||
                "Prediction failed"
            );

        }


        const risk =
            result.predicted_risk;


        /* -----------------------------------------
           LOW RISK
        ----------------------------------------- */

        if (risk === "Low") {

            resultIcon.className =
                "result-icon low";

            resultIcon.textContent =
                "✓";

            resultTitle.textContent =
                "LOW RISK";

            resultText.textContent =
                "The facility currently shows a relatively low hygiene risk level.";

        }


        /* -----------------------------------------
           MEDIUM RISK
        ----------------------------------------- */

        else if (risk === "Medium") {

            resultIcon.className =
                "result-icon medium";

            resultIcon.textContent =
                "!";

            resultTitle.textContent =
                "MEDIUM RISK";

            resultText.textContent =
                "The facility requires attention and regular hygiene monitoring.";

        }


        /* -----------------------------------------
           HIGH RISK
        ----------------------------------------- */

        else {

            resultIcon.className =
                "result-icon high";

            resultIcon.textContent =
                "⚠";

            resultTitle.textContent =
                "HIGH RISK";

            resultText.textContent =
                "The facility shows a high predicted hygiene risk and should be reviewed.";

        }

    }


    /* ---------------------------------------------
       ERROR HANDLING
    --------------------------------------------- */

    catch (error) {

        console.error(error);

        resultIcon.className =
            "result-icon high";

        resultIcon.textContent =
            "!";

        resultTitle.textContent =
            "Prediction Error";

        resultText.textContent =
            "Unable to connect to the prediction service.";

    }

}