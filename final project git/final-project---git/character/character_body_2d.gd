extends CharacterBody2D


@export var move_speed : float = 200

func _physics_process(_delta):

	

	#Input diretion
	var input_direction = Vector2(
		Input.get_action_strength("left") - Input.get_action_strength("right"),
		Input.get_action_strength("up") - Input.get_action_strength("down")
	);

		#update velocity
	velocity = input_direction * move_speed

		#Move and slide function uses veloicty of characters to move
	move_and_slide()
