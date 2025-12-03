# 📑 Cahier des charges – Projet Pulse

## 🎯 Objectif
Développer une application web type **Discord**, centrée sur la communication en temps réel (texte et vocal), avec une montée en fonctionnalités progressive.  
Le **MVP** doit rester simple pour garantir une mise en œuvre rapide et motivante.

---

## 🛠️ Étapes du MVP

### 1. Inscription / Connexion
**Fonctionnalités :**
- Formulaire d’inscription (email, pseudo, mot de passe)
- Connexion avec vérification des identifiants
- Gestion des sessions (JWT ou cookies sécurisés)

**Technos suggérées :**
- Backend : Node.js + Express
- Base de données : MongoDB (utilisateurs)
- Authentification : JWT

---

### 2. Demande d’ami
**Fonctionnalités :**
- Recherche d’utilisateur par pseudo/email
- Envoi et réception de demandes d’amis
- Acceptation / refus

**Technos suggérées :**
- Stockage des relations dans MongoDB (table `friends`)
- Notifications en temps réel via Socket.IO

---

### 3. Chat texte avec un ami
**Fonctionnalités :**
- Envoi / réception de messages instantanés
- Historique des conversations

**Technos suggérées :**
- Socket.IO pour le temps réel
- MongoDB pour stocker les messages
- Interface React simple (liste de messages + champ de saisie)

---

### 4. Chat vocal (1-to-1)
**Fonctionnalités :**
- Appel vocal entre deux amis
- Bouton **Appeler** / **Raccrocher**

**Technos suggérées :**
- WebRTC pour la communication audio
- Socket.IO pour la signalisation (établir la connexion)
- HTTPS obligatoire pour WebRTC

---

### 5. Création de serveurs
**Fonctionnalités :**
- Création d’un serveur par un utilisateur
- Invitation d’amis dans le serveur
- Gestion des rôles simples (admin / membre)

**Technos suggérées :**
- MongoDB (collection `servers`)
- Interface React pour gérer la liste des serveurs