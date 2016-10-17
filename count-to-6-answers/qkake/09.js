function html(template, name, message) {
    var toSafe = (s) => s.replace(/&/ ,"&amp;")
            .replace(/'/ ,"&apos;")
            .replace(/"/ ,"&quot;")
            .replace(/</ ,"&lt;")
            .replace(/>/ ,"&gt;");
    var safeName = toSafe(name);
    var safeMessage = toSafe(message);
    return template[0] +
        safeName +
        template[1] +
        safeMessage +
        template[2];
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
