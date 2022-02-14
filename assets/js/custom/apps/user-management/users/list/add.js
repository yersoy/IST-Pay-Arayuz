"use strict";
var KTUsersAddUser = function() {
    const t = document.getElementById("kt_modal_add_user"),
        e = t.querySelector("#kt_modal_add_user_form"),
        n = new bootstrap.Modal(t);
    return {
        init: function() {
            (() => {
                var o = FormValidation.formValidation(e, { fields: { user_name: { validators: { notEmpty: { message: "Firma & Şahıs İsmi Gerekli" } } }, user_email: { validators: { notEmpty: { message: "E-Mail Geçerli Değil" } } } }, plugins: { trigger: new FormValidation.plugins.Trigger, bootstrap: new FormValidation.plugins.Bootstrap5({ rowSelector: ".fv-row", eleInvalidClass: "", eleValidClass: "" }) } });
                const i = t.querySelector('[data-kt-users-modal-action="submit"]');
                i.addEventListener("click", (t => { t.preventDefault(), o && o.validate().then((function(t) { console.log("validated!"), "Valid" == t ? (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function() { i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({ text: "Firma Başarıyla Oluşturuldu", icon: "success", buttonsStyling: !1, confirmButtonText: "Devam Et", customClass: { confirmButton: "btn btn-primary" } }).then((function(t) { t.isConfirmed && n.hide() })) }), 2e3)) : Swal.fire({ text: "Firma Eklerken Alanlar Boş Bırakılamaz.Lütfen Alanları Kontrol Edin", icon: "error", buttonsStyling: !1, confirmButtonText: "Tamam", customClass: { confirmButton: "btn btn-primary" } }) })) })), t.querySelector('[data-kt-users-modal-action="cancel"]').addEventListener("click", (t => { t.preventDefault(), Swal.fire({ text: "Firma Eklemeyi İptal Etmek İstediğine Eminmisin?", icon: "warning", showCancelButton: !0, buttonsStyling: !1, confirmButtonText: "Evet, iptal et", cancelButtonText: "Hayır, Devam et", customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-active-light" } }).then((function(t) { t.value ? (e.reset(), n.hide()) : "cancel" === t.dismiss && Swal.fire({ text: "Your form has not been cancelled!.", icon: "error", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }) })) })), t.querySelector('[data-kt-users-modal-action="close"]').addEventListener("click", (t => { t.preventDefault(), Swal.fire({ text: "Are you sure you would like to cancel?", icon: "warning", showCancelButton: !0, buttonsStyling: !1, confirmButtonText: "Yes, cancel it!", cancelButtonText: "No, return", customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-active-light" } }).then((function(t) { t.value ? (e.reset(), n.hide()) : "cancel" === t.dismiss && Swal.fire({ text: "Your form has not been cancelled!.", icon: "error", buttonsStyling: !1, confirmButtonText: "Ok, got it!", customClass: { confirmButton: "btn btn-primary" } }) })) }))
            })()
        }
    }
}();
KTUtil.onDOMContentLoaded((function() { KTUsersAddUser.init() }));