function html(array, ...args) {
  return args.reduce((prev, current, index) => prev.concat(array[index]).concat(escape(current)), "")
             .concat(array[array.length - 1]);
}

function escape(s) {
  return s.replace(/\&/g, "&amp;")
          .replace(/\'/g, "&apos;")
          .replace(/\"/g, "&quot;")
          .replace(/\</g, "&lt;")
          .replace(/\>/g, "&gt;");
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
