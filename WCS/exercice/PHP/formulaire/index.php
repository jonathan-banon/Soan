<<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="thanks.php" method="post">

    <div>
        <label  for="name" >Nom :</label>
        <input  type="text"  id="name"  name="user_name" required>
    </div>
    <div>
        <label  for="lastname">Prénom :</label>
        <input  type="text"  id="lastname"  name="user_lastname" required>
    </div>
    <div>
        <label  for="courriel">Courriel :</label>
        <input  type="email"  id="courriel"  name="user_email" required>
    </div>
    <div>
        <label  for="phone-number">Numéro de téléphone:</label>
        <input  type="tel"  id="phone-number"  name="user_phone_number" required>
    </div>
    <div>
        <label for="thematic-select">Thèmes :</label>
        <select name="test" id="thematic-select" >
            <option value="">--Choix du thème--</option>
            <option value="Thematic_01">Thème 01</option>
            <option value="Thematic_02">Thème 02</option>
            <option value="Thematic_03">Thème 03</option>
        </select>
    </div>
    <div>
        <label  for="message">Message :</label>
        <textarea id="message"  name="user_message" required> </textarea>
    </div>
    <div  class="button">
        <button  type="submit">Envoyer votre message</button>
    </div
</form>
</body>
</html>