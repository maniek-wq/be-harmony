# Szablony EmailJS – Be Harmony

Instrukcja konfiguracji w https://dashboard.emailjs.com

---

## 1. Szablon główny (wiadomość do gabinetu)

**Email Templates → Add New Template**

- **Name:** Be Harmony – wiadomość z formularza
- **Template ID:** np. `template_kontakt` (skopiuj po zapisaniu)

### Ustawienia:

| Pole | Wartość |
|------|---------|
| **To Email** | nataliamatuszbeharmony@gmail.com |
| **From Name** | {{name}} |
| **Reply-To** | {{email}} |
| **Subject** | Be Harmony – {{subject}} |

### Content (Body):

```html
<h2>Nowa wiadomość z formularza kontaktowego</h2>

<p><strong>Imię i nazwisko:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Telefon:</strong> {{phonePrefix}} {{phoneNumber}}</p>
<p><strong>Temat:</strong> {{subject}}</p>
<hr>
<p><strong>Wiadomość:</strong></p>
<p>{{message}}</p>
```

---

## 2. Szablon auto-reply (potwierdzenie dla klienta)

**Email Templates → Add New Template**

- **Name:** Be Harmony – auto-reply
- **Template ID:** np. `template_autoreply` (skopiuj po zapisaniu)

### Ustawienia:

| Pole | Wartość |
|------|---------|
| **To Email** | {{email}} |
| **From Name** | Be Harmony - Natalia Matusz |
| **Reply-To** | nataliamatuszbeharmony@gmail.com |
| **Subject** | Potwierdzenie – otrzymaliśmy Twoją wiadomość |

### Content (Body):

```html
<p>Dzień dobry {{name}},</p>

<p>Dziękujemy za kontakt. Twoja wiadomość została przekazana do gabinetu Be Harmony.</p>

<p>Odezwiemy się najszybciej jak to możliwe, zwykle w ciągu 24 godzin roboczych.</p>

<p>W razie pilnych spraw możesz dzwonić: <strong>601 160 646</strong></p>

<p>Z pozdrowieniami,<br>
<strong>Be Harmony – Gabinet terapii ciała</strong><br>
Przęsocin, ul. Orzechowa 33B/lok.7</p>
```

---

## 3. Połączenie Auto-Reply z szablonem głównym

1. Otwórz szablon główny (wiadomość do gabinetu)
2. Zakładka **Auto-Reply**
3. Wybierz szablon **Be Harmony – auto-reply**
4. **Save**

EmailJS wyśle wtedy obie wiadomości przy jednym wywołaniu `sendForm`.

---

## 4. Mapowanie zmiennych

**Szablon główny** (z formularza): `name`, `email`, `phonePrefix`, `phoneNumber`, `subject`, `message`

**Auto-reply** (te same dane z formularza): `{{name}}`, `{{email}}` – EmailJS przekazuje je automatycznie po połączeniu szablonów.
