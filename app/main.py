from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/basic-concepts/")
def load_basic_concepts():
    return render_template("basic-concepts.html")


@app.route("/playing-the-game/")
def load_gameplay():
    return render_template("playing-the-game.html", title="Gameplay")


@app.route("/advanced-rules/")
def load_advanced():
    return render_template("advanced-rules.html", title="Advanced Rules")


@app.route("/deck-building/")
def load_deckbuilding():
    return render_template("deck-building.html", title="Deck Building")


@app.route("/glossary/")
def load_glossary():
    return render_template("glossary.html", title="Glossary")


@app.route("/basic-concepts-old/")
def play_game():
    return render_template("basicConcepts.html")


@app.route("/test/")
def test():
    return render_template("playing-the-game.html", title="Gameplay")




##### for food!!! #####

### code from https://dev.to/svencowart/multi-value-query-parameters-with-flask-3a92
def normalize_query_param(value):
    """
    Given a non-flattened query parameter value,
    and if the value is a list only containing 1 item,
    then the value is flattened.

    :param value: a value from a query parameter
    :return: a normalized query parameter value
    """
    return value if len(value) > 1 else value[0]


def normalize_query(params):
    """
    Converts query parameters from only containing one value for each parameter,
    to include parameters with multiple values as lists.

    :param params: a flask query parameters data structure
    :return: a dict of normalized query parameters
    """
    params_non_flat = params.to_dict(flat=False)
    return {k: normalize_query_param(v) for k, v in params_non_flat.items()}


@app.route("/food/")
def food():
    query_params = normalize_query(request.args)

    measurement1 = int(query_params["measurement"][0])
    measurement2 = int(query_params["measurement"][1])
    multiplier = int(query_params["multiplier"])
    list_measurements = query_params["measurement"]
    print(list_measurements)
    new_mesurements = list(map(lambda x: int(x) * multiplier, list_measurements))
    print(new_mesurements)
    return new_mesurements