import React from "react";
import van from "./img/bags-van-3.jpg";
import "./HomepageSections.css";

function HomepageSections() {
  return (
    <div>
      <div className="px-3 pt-3 detail-contain">
        <div className="detail">
          <div className="align-self-center">
            <h2 className="text-left pt-4">We have experience.</h2>

            <h6 className="text-left">
              Kogi echo park messenger bag VHS af. Biodiesel semiotics literally
              marfa skateboard. Viral hot chicken glossier distillery banjo
              ethical williamsburg pug live-edge synth narwhal. Keffiyeh
              waistcoat 90's disrupt stumptown, tousled twee lo-fi. Plaid
              disrupt marfa, fam photo booth narwhal intelligentsia DIY mustache
              hell of 3 wolf moon banh mi austin ramps. Raw denim enamel pin
              pop-up fam trust fund four dollar toast truffaut ramps kickstarter
              echo park copper mug bicycle rights roof party farm-to-table.
            </h6>
          </div>

          <div className="align-self-center">
            <img className="img-fluid detail-pic" alt="ass" src={van}></img>
          </div>
        </div>
      </div>

      <div className="p-3 detail-contain">
        <div className="detail">
          <div className="align-self-center">
            <img className="img-fluid detail-pic" alt="ass" src={van}></img>
          </div>
          <div className="align-self-center">
            <h2 className="text-right pt-4">We Work Within your budget.</h2>

            <h6 className="text-right">
              Kogi echo park messenger bag VHS af. Biodiesel semiotics literally
              marfa skateboard. Viral hot chicken glossier distillery banjo
              ethical williamsburg pug live-edge synth narwhal. Keffiyeh
              waistcoat 90's disrupt stumptown, tousled twee lo-fi. Plaid
              disrupt marfa, fam photo booth narwhal intelligentsia DIY mustache
              hell of 3 wolf moon banh mi austin ramps. Raw denim enamel pin
              pop-up fam trust fund four dollar toast truffaut ramps kickstarter
              echo park copper mug bicycle rights roof party farm-to-table.
            </h6>
          </div>
        </div>
      </div>

      <div className="p-3  detail-contain">
        <div className="detail">
          <div className="align-self-center">
            <h2 className="text-left pt-4">
              We focus on what's important to you.
            </h2>

            <h6 className="text-left">
              Kogi echo park messenger bag VHS af. Biodiesel semiotics literally
              marfa skateboard. Viral hot chicken glossier distillery banjo
              ethical williamsburg pug live-edge synth narwhal. Keffiyeh
              waistcoat 90's disrupt stumptown, tousled twee lo-fi. Plaid
              disrupt marfa, fam photo booth narwhal intelligentsia DIY mustache
              hell of 3 wolf moon banh mi austin ramps. Raw denim enamel pin
              pop-up fam trust fund four dollar toast truffaut ramps kickstarter
              echo park copper mug bicycle rights roof party farm-to-table.
            </h6>
          </div>
          <div className="align-self-center">
            <img className="img-fluid detail-pic" alt="ass" src={van}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageSections;
