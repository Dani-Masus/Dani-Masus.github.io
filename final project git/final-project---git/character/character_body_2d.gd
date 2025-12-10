extends CharacterBody2D


@export var move_speed : float = 200

@export var starting_direction : Vector2 = Vector2(0, 1)
# parameters/idle/blend_position
@onready var animation_tree = $AnimationTree

func _ready():
	animation_tree.set("parameters/idle/blend_position", starting_direction)

func _physics_process(_delta):

	

	#Input diretion
	var input_direction = Vector2(
		Input.get_action_strength("right") - Input.get_action_strength("left"),
		Input.get_action_strength("down") - Input.get_action_strength("up")
	);

		#update velocity
	velocity = input_direction * move_speed

		#Move and slide function uses veloicty of characters to move
	move_and_slide()
