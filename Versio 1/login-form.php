<div id="login-dialog" title="Kirjaudu sisään" style="display: none;">
    <form id="login-form" action="" method="post" role="form">
        <div class="input-row">
            <span id="email-info"></span> <input type="email"
                name="Sähköposti" id="login-email-id"
                class="input-field" placeholder="Sähköposti">
        </div>
        <div class="input-row">
            <span id="password-info"></span> <input type="password"
                name="login-Salasana" id="login-password"
                class="input-field" placeholder="Salasana">
        </div>
        <input type="button" class="btn-submit" value="Kirjaudu sisään"
            onclick="ajaxLogin()">
    </form>

    <div class="success-message" id="login-success-message"
        style="display: none"></div>
    <div class="error-message" id="login-error-message"
        style="display: none"></div>
    <div id="ajaxloader" style="display: none">
        <img src="LoaderIcon.gif" id="loaderId" />
    </div>
</div>