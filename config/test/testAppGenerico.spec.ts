import { browser, $ } from "@wdio/globals";
/*Per collegare il client locale al servizio browserstack, 
Ho sostituito il file per il testig locale, per quello sull'ambiente remoto-
Ho aggiunto delle configurazioni di testing per dire ad Appium di avviare l'app con 
una specifica configurazione.
Ho aggiunto nella dashboard di browserstack un .apk (non appartenente ai prodotti di google) e di conseguenza mi viene restituito un codice da inserire nel file wdio.conf.ts
Ho salvato le credenziali di browserstack all'interno dell'env.


Utilizzo di jenkins:
1) Installazione dell'istanza jenkins, un applicazione che è disponibile in web localHost:8080
2) Installare i plug in di nodejs e npm.
3) Collegare browserstack con jenkins seguendo le procedure di connessione ,tramite la console jenkins.
3) http://localhost:8080/manage/credentials  Configuro nell'ambiente le credenziali che jenkins dovrà utilizzare per eseguire i test.
4) http://localhost:8080/job/BrowserStackTest/configure Ho impostato sia la casella browserstack sia la casella Provide Node & npm bin/ folder to PATH.
5) Ho configurato il path workspace copiando la cartella dal Desktop al working space e applicando il comando sudo chown -R jenkins:jenkins config (il root sposta il proprietario da x a jenkins)
6) Ho inserito i comandi per fare eseguire il build a Jenkins
*/
describe("Test app generico", () => {
  it("Testiamo se al crentro è presente un testo con Hello world", async () => {
    await browser.pause(1000);
    /* console.log(
      await $(
        'android= new UiSelector().className("android.view.ViewGroup").instance(2)'
      )
        .$$("*")[0]
        .getText()
    );*/
    const testoCentrale = await $(
      'android= new UiSelector().text("Hello World!")'
    ).getText();
    expect(testoCentrale).toBe("Hello World!");
  });
});
