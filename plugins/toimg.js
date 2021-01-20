const {spawn} = require ('child_process')
const util = require ('util')
const {MessageType} = require ('@ adiwajshing / baileys')

let handler = async (m, {conn}) => {
  if (! m.quoted) return conn.reply (m.chat, 'Identifique o adesivo corretamente!', m)
  deixe q = {mensagem: {[m.quoted.mtype]: m.quoted}}
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM (q)
    se (! adesivo) jogar adesivo
    deixe bufs = []
    deixe im = spawn ('converter', ['webp: -', 'jpeg: -'])
    im.on ('erro', e => conexão.resposta (m.chat, util.format (e), m))
    im.stdout.on ('dados', chunk => bufs.push (chunk))
    im.stdin.write (adesivo)
    im.stdin.end ()
    im.on ('sair', () => {
      conn.sendMessage (m.chat, Buffer.concat (bufs), MessageType.image, {
        citado: m
      })
    })
  }
}
handler.command = / ^ toimg $ / i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler