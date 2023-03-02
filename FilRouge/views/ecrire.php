<div class="titleW">
    <h1>Décrivez nous vôtre livre.</h1>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingTitle" placeholder="Entrez votre titre">
  <label for="floatingTitle">Entrez votre titre</label>
</div>
<div class="col-md-12 d-flex description">
    <div class="col-md-9 col-sd-9">
        <div class="form-floating">
            <textarea class="form-control text_description" placeholder="Entrez votre résumé" id="floatingDescription" maxlength="10"></textarea>
            <label for="floatingDescription">Entrez votre résumé</label>
        </div>
    </div>
    <div class="col-md-3 d-flex flex-column align-items-center">
        <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Inserez votre couverture recto verso</label>
            <input class="form-control" type="file" id="formFileMultiple" multiple accept="image/*">
            <label>Votre sélection:</label>
            <div id="imageList"></div>
            <a href="ecrire2"><button type="button" class="btn-green" id="suivant">Suivant</button></a>
        </div>
    </div>
</div>