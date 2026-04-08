/**
 * Kustlab - Automatisering Offertes via Google Workspace
 * Volg deze stappen om het werkend te krijgen:
 * 1. Maak een Google Sheet aan met kolommen: Naam Klant | Bedrijfsnaam | Email | Pakket | Prijs | Pijnpunt
 * 2. Ga in de balk naar 'Extensies' > 'Apps Script'
 * 3. Plak deze code daar in (vervang de standaardcode).
 * 4. Pas de TEMPLATE_DOC_ID aan naar het ID van jouw Google Doc offerte.
 */

const TEMPLATE_DOC_ID = 'VUL_HIER_JE_GOOGLE_DOC_ID_IN'; // Het ID uit de URL van je basis offerte
const EMAIL_ONDERWERP = 'Kustlab x Uitnodiging tot groei | Je Digitale Strategie';

function genereerEnVerzendOfferte() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const actieveRij = sheet.getActiveCell().getRow();
  
  if(actieveRij === 1) {
    SpreadsheetApp.getUi().alert("Selecteer een specifieke klant-rij, niet de koptekst.");
    return;
  }
  
  const data = sheet.getRange(actieveRij, 1, 1, 6).getValues()[0];
  const [naamKlant, bedrijfsnaam, emailKlant, pakket, prijs, pijnpunt] = data;

  if(!emailKlant || !bedrijfsnaam) {
    SpreadsheetApp.getUi().alert("Zorg dat de klantgegevens en email zijn ingevuld op deze rij.");
    return;
  }

  const actie = SpreadsheetApp.getUi().alert(
    `Offerte genereren en VERZENDEN naar ${emailKlant} (${bedrijfsnaam})?`, 
    SpreadsheetApp.getUi().ButtonSet.YES_NO
  );

  if (actie !== SpreadsheetApp.getUi().Button.YES) {
    return; // Stop als je annuleert
  }

  // 1. Maak een kopie van het template document
  const templateDoc = DriveApp.getFileById(TEMPLATE_DOC_ID);
  const mapID = templateDoc.getParents().next().getId(); 
  const nieuweKopie = templateDoc.makeCopy(`Offerte 2026 - Kustlab - ${bedrijfsnaam}`, DriveApp.getFolderById(mapID));
  const nieuwDocId = nieuweKopie.getId();
  
  // 2. Open de kopie en vervang de placeholders met de velden uit de Google Sheet
  const doc = DocumentApp.openById(nieuwDocId);
  const body = doc.getBody();
  
  body.replaceText('{{Naam}}', naamKlant);
  body.replaceText('{{Bedrijf}}', bedrijfsnaam);
  body.replaceText('{{Pakket}}', pakket);
  body.replaceText('{{Prijs}}', prijs);
  body.replaceText('{{Pijnpunt}}', pijnpunt);
  
  doc.saveAndClose();

  // 3. Zet het google Doc om naar een PDF
  Utilities.sleep(2000); // Wacht 2 seconden om het opslaan goed te verwerken
  const pdfBlob = DriveApp.getFileById(nieuwDocId).getAs('application/pdf');

  // 4. Stel de e-mail op en verzend het met Gmail
  const emailVerhaal = `Beste ${naamKlant},
  
Bedankt voor de goede call! Zoals we hebben besproken stuur ik hierbij onze strategie om de digitale processen binnen ${bedrijfsnaam} te optimaliseren.

We besteden specifieke aandacht aan het voorkomen van: ${pijnpunt}. 

In de bijlage vind je ons voorstel met betrekking tot het '${pakket}' traject. Als we hierin de juiste route hebben gevonden, dan kun je de offerte bevestigen door te reageren of digitaal te tekenen. Voor details omtrent de oplevering spreken we elkaar snel weer.

Met vriendelijke groet,

Jouw Naam
Digital Solutions Consultant
Kustlab`;

  GmailApp.sendEmail(emailKlant, EMAIL_ONDERWERP, emailVerhaal, {
    attachments: [pdfBlob],
    name: "Kustlab Digital Solutions"
  });

  // Optioneel: Voeg een bevestigingsteken toe in cel G
  sheet.getRange(actieveRij, 7).setValue('VERZONDEN OP: ' + new Date().toLocaleString());
  SpreadsheetApp.getUi().alert("Gelukt! De offerte is aangemaakt, in PDF omgezet en succesvol verstuurd via jouw Gmail.");
}

/**
 * Zorgt voor een handige knop in het Google Sheet menu bovenin!
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Kustlab Automatisering')
      .addItem('Genereer & Verzend Offerte (Actieve Rij)', 'genereerEnVerzendOfferte')
      .addToUi();
}
