from flask import Flask, render_template, request, jsonify
from datetime import datetime
import json
import os

app = Flask(__name__)

RANKING_FILE = "ranking.json"


def load_ranking():
    if not os.path.exists(RANKING_FILE):
        return []

    try:
        with open(RANKING_FILE, "r", encoding="utf-8") as file:
            return json.load(file)

    except (json.JSONDecodeError, FileNotFoundError):
        return []


def save_ranking(ranking):
    with open(RANKING_FILE, "w", encoding="utf-8") as file:
        json.dump(
            ranking,
            file,
            ensure_ascii=False,
            indent=4
        )


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/ranking", methods=["GET"])
def get_ranking():

    ranking = load_ranking()

    ranking.sort(
        key=lambda player: player["record"],
        reverse=True
    )

    return jsonify(ranking)


@app.route("/ranking", methods=["POST"])
def add_score():

    data = request.get_json()

    if not data:
        return jsonify({
            "error": "Nenhum dado foi enviado."
        }), 400

    name = str(data.get("name", "")).strip()
    score = data.get("score")

    if not name:
        return jsonify({
            "error": "Nome não informado."
        }), 400

    name = name[:20]

    try:
        score = int(score)
    except (TypeError, ValueError):
        return jsonify({
            "error": "Pontuação inválida."
        }), 400

    if score < 0:
        return jsonify({
            "error": "Pontuação inválida."
        }), 400

    ranking = load_ranking()

    jogador = None

    for player in ranking:
        if player["name"].lower() == name.lower():
            jogador = player
            break

    data_partida = datetime.now().strftime(
        "%d/%m/%Y %H:%M"
    )

    novo_recorde = False

    if jogador:

        if score > jogador["record"]:

            jogador["record"] = score
            jogador["date"] = data_partida

            novo_recorde = True

    else:

        ranking.append({
            "name": name,
            "record": score,
            "date": data_partida
        })

        novo_recorde = True

    ranking.sort(
        key=lambda player: player["record"],
        reverse=True
    )

    ranking = ranking[:10]

    save_ranking(ranking)

    return jsonify({
        "success": True,
        "new_record": novo_recorde,
        "ranking": ranking
    })


if __name__ == "__main__":
    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )