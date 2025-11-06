
function urlencode(text){ return encodeURIComponent(text); }

document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('apply-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var dob = document.getElementById('dob').value.trim();
      var mobile = document.getElementById('mobile').value.trim();
      var email = document.getElementById('email').value.trim();
      var country = document.getElementById('country').value;
      var visa = document.getElementById('visa').value;
      var notes = document.getElementById('notes').value.trim();
      if(!name || !mobile || !email){
        alert('Please fill Name, Mobile and Email (required).');
        return;
      }
      // Build message
      var msg = 'Dream Choice - New candidate submission%0A';
      msg += 'Name: ' + urlencode(name) + '%0A';
      if(dob) msg += 'DOB: ' + urlencode(dob) + '%0A';
      msg += 'Mobile: ' + urlencode(mobile) + '%0A';
      msg += 'Email: ' + urlencode(email) + '%0A';
      if(country) msg += 'Target Country: ' + urlencode(country) + '%0A';
      if(visa) msg += 'Visa Type: ' + urlencode(visa) + '%0A';
      if(notes) msg += 'Notes: ' + urlencode(notes) + '%0A';
      msg += '%0A' + 'IMPORTANT: Attachments (passport/resume/photo) must be sent manually via WhatsApp/Telegram if required.';

      // WhatsApp - open chat with your number prefilled
      var waNumber = '919392564229'; // change if needed
      var waUrl = 'https://wa.me/' + waNumber + '?text=' + msg;

      // Telegram share (opens Telegram share dialog)
      var tgText = decodeURIComponent(msg); // t.me/share/url expects normal text param 'text'
      var tgUrl = 'https://t.me/share/url?url=&text=' + urlencode(decodeURIComponent(msg.replace(/%0A/g,'\n')));

      // Also email fallback (mailto)
      var mailto = 'mailto:dreamchoicesc@mail.com?subject=' + urlencode('New candidate: ' + name) + '&body=' + msg.replace(/%0A/g, '\n');

      // Open both (WhatsApp and Telegram) in new tabs; also open mail client in another tab
      window.open(waUrl, '_blank');
      setTimeout(function(){ window.open(tgUrl, '_blank'); }, 600);
      setTimeout(function(){ window.location.href = mailto; }, 1200);
      // show thank you
      setTimeout(function(){ alert('Message opened in WhatsApp/Telegram/email. Please attach files manually to the WhatsApp/Telegram chat.'); form.reset(); }, 1800);
    });
  }
});
