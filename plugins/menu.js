let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('OFF')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
 ═〘 AZARK OFF〙═ 


Olá, ${name} 👋
Exp: ${exp}

Criador: Wa.me/554191721216

📟 Tempo: ${time}
📆 Encontro: ${week}, ${date}

${more.repeat(1000)}

Como adicionar XP:
+1 Encomenda exp / regular
+10 Exp / comando

═════✪〘 Menu 〙✪═══

═〘 Xp 〙 ═
➥ ${_p}leaderboard [Número de usuários]

═〘 Comando 〙 ═
➥ ${_p}menu
➥ ${_p}help
➥ ${_p}?

═〘 Tutorial do bot 〙 ═
➥ ${_p}tutorial

═〘 Others 〙 ═
➥ ${_p}qr <texto>
➥ ${_p}stiker (rubrica)
➥ ${_p}stiker <url>
➥ ${_p}toimg (resposta)
➥ ${_p}bucin
➥ ${_p}ssweb <url>
➥ ${_p}sswebf <url>
➥ ${_p}google <search>
➥ ${_p}googlef <search>
➥ ${_p}readmore <texto> | <ocultar>
➥ ${_p}quran
➥ ${_p}modApk

═〘 Group 〙 ═
➥ ${_p} add [62xxxxxxxxx]
➥ ${_p} promote [@tagmember]
➥ ${_p} demote [@tagadmin]
➥ ${_p} linkgrup
➥ ${_p} pengumuman [texto]
➥ ${_p} hidetag [texto]
➥ ${_p} listonline
➥ ${_p} kick @Member
➥ ${_p} grouplist

═〘 EXPERIMENTAL 〙 ═
➥ ${_p}jadibot [código de login se houver / vazio]
➥ ${_p}berhenti
➥ ${_p}getcode

═〘 OWNER 〙 ═
➥ ${_p}bcgc <texto>
➥ ${_p}setmenu <texto>
➥ ${_p}deletechat (Grupo de bate-papo)
➥ ${_p}deletechat grupo
➥ ${_p}mutechat (Grupo de bate-papo)
➥ ${_p}mutechat grupo

═〘 PROPAGANDA 〙 ═
➥ Número do Criador: Wa.me/554191721216
➥ Github: GitHub está privado

═〘 Informações do bot 〙 ═
➥ Nome : Azark off 
➥ Codificado using *Nano* on Android \\w Termux
➥ 

Advanced:
  > return m

═〘 AZARK OFF 〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

