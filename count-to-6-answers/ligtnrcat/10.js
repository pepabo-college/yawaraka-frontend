console.log(html`<b>${process.argv[2]} says</b>: ${process.argv[3]}`);

function html(strings, ...values) {
    var replaced_v0 = values[0].replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;");
    var replaced_v1 = values[1].replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;");

    return `${strings[0]}${replaced_v0}${strings[1]}"${replaced_v1}"`;
}
