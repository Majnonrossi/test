import axios from 'axios';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*هذا الأمر خاص بتوليد الصور باستعمال الذكاء الإصطناعي*\n\n*مثال*\n*${usedPrefix + command} boy*`;

  try {
    m.reply('*الرجاء الانتظار، جاري إنشاء الصور...*');

    const endpoint = `https://bk9.fun/ai/photoleap?q=Boy}`;
    const response = await axios.get(endpoint);
      const imageBuffer = response.data.BK9;
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*فشل إنشاء الصورة*';
    }
  } catch (error) {
    throw '*أُووبس! حدث خطأ ما أثناء إنشاء الصور. الرجاء معاودة المحاولة في وقت لاحق.*';
  }
};

handler.help = ['photoleap'];
handler.tags = ['drawing'];
handler.command = ['p0'];
export default handler;
