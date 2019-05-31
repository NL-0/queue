<div id="register-dialog" class="register-class"
    title="Rekisteröintilomake" style="display: none;">
    <form id="register-form" action="" method="post" role="form">
        <div class="input-row">
            <span id="first-name-info"></span> <input type="text"
                name= "Etunimi" id="first-name" class="input-field"
                placeholder="Etunimi" value="">
        </div>
        <div class="input-row">
            <span id="last-name-info"></span> <input type="text"
                name="Sukunimi" id="last-name" class="input-field"
                placeholder="Sukunimi" value="">
        </div>
        <div class="input-row">
            <span id="register-email-info"></span> <input type="email"
                name="Sähköposti" id="register-email-id"
                class="input-field" placeholder="Sähköposti" value="">
        </div>
        <div class="input-row">
            <span id="contact-no-info"></span> <input type="text"
                name="Puhelinnumero" id="contact-number" maxlength="10"
                class="input-field" placeholder="Puhelinnumero">
        </div>
        <div class="input-row">
            <span id="register-passwd-info"></span> <input
                type="password" name="register-Salasana"
                id="register-password" class="input-field"
                placeholder="Salasana">
        </div>
        <div class="input-row">
            <span id="confirm-passwd-info"></span> <input
                type="password" name="vahvista salasana"
                id="confirm-password" class="input-field"
                placeholder="vahvista salasana">
        </div>
        <div class="submit-button">
            <input type="button" class="btn-submit" value="Rekisteröidy"
                onclick="ajaxRegistration()">
        </div>

    </form>

    <div class="success-message" id="register-success-message"
        style="display: none"></div>
    <div class="error-message" id="register-error-message"
        style="display: none"></div>

</div>