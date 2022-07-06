let handler = async m => m.reply(`
╭─「 Donasi • Gopay 」
│ •  [0899-2669-816]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
