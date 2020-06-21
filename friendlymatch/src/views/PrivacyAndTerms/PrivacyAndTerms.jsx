import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function PrivacyAndTerms() {
  const classes = useStyles();

  return (
    <>
      <Header>
        <Menu />
      </Header>

      <div className={classes.root}>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h2>
                  <b>Privacy & Terms </b>
                </h2>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>Last updated: June 20, 2020</p>
          <p>
            Please read these terms and conditions carefully before using Our
            Service.
          </p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Interpretation </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>
        </div>

        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Definitions </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>For the purposes of these Terms and Conditions:</p>
          <p>
            <b>- Affiliate</b> means an entity that controls, is controlled by
            or is under common control with a party, where "control" means
            ownership of 50% or more of the shares, equity interest or other
            securities entitled to vote for election of directors or other
            managing authority.
          </p>
          <p>
            <b>- Company</b> (referred to as either "the Company", "We", "Us" or
            "Our" in this Agreement) refers to FriendlyMatch.
          </p>
          <p>
            <b>- Country </b> refers to: Portugal
          </p>
          <p>
            <b>- Device </b> means any device that can access the Service such
            as a computer, a cellphone or a digital tablet.
          </p>
          <p>
            <b>- Service </b> refers to the Website.
          </p>
          <p>
            <b>- Terms and Conditions</b> (also referred as "Terms") mean these
            Terms and Conditions that form the entire agreement between You and
            the Company regarding the use of the Service. This Terms and
            Conditions agreement has been created with the help of the Terms and
            Conditions Generator.
          </p>
          <p>
            <b>- Third-party Social Media Service </b> means any services or
            content (including data, information, products or services) provided
            by a third-party that may be displayed, included or made available
            by the Service.
          </p>
          <p>
            <b>- Website </b> refers to FriendlyMatch, accessible from
            FriendlyMatch
          </p>
          <p>
            <b>- You </b> means the individual accessing or using the Service,
            or the company, or other legal entity on behalf of which such
            individual is accessing or using the Service, as applicable.
          </p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Acknowledgment </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>
          <p>
            {" "}
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </p>
          <p>
            {" "}
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>
          <p>
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Links to Other Websites </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by the Company.
          </p>
          <p>
            The Company has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that the
            Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </p>
          <p>
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party web sites or services that You visit
          </p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Termination </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            We may terminate or suspend Your access immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions.
          </p>
          <p>
            Upon termination, Your right to use the Service will cease
            immediately.
          </p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Limitation of Liability </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Terms and Your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You
            through the Service or 100 USD if You haven't purchased anything
            through the Service.
          </p>
          <p>
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of this Terms), even if the Company or
            any supplier has been advised of the possibility of such damages and
            even if the remedy fails of its essential purpose.
          </p>
          <p>
            Some states do not allow the exclusion of implied warranties or
            limitation of liability for incidental or consequential damages,
            which means that some of the above limitations may not apply. In
            these states, each party's liability will be limited to the greatest
            extent permitted by law.
          </p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>"AS IS" and "AS AVAILABLE" Disclaimer </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, the Company, on its own
            behalf and on behalf of its Affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the Service, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, the Company provides no warranty or undertaking, and
            makes no representation of any kind that the Service will meet Your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error free or that any errors or defects can or will be
            corrected.
          </p>
          <p>
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Service, or the information, content, and materials or products
            included thereon; (ii) that the Service will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Service; or (iv)
            that the Service, its servers, the content, or e-mails sent from or
            on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.
          </p>
          Some jurisdictions do not allow the exclusion of certain types of
          warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.
          <p></p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Governing Law </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </p>
        </div>
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Disputes Resolution </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
          </p>
        </div>
        {/* fiquei aqui*/}
        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Interpretation </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>
        </div>

        <div className="GridTitleGame">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                <h3>
                  <b>Interpretation </b>
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="container">
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
          </p>
          <p>
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </p>
        </div>

        {/* Ultimo!*/}
      </div>
    </>
  );
}
