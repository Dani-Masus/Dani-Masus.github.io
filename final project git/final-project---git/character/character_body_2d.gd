extends CharacterBody2D


@export var move_speed : float = 200

@export var starting_direction : Vector2 = Vector2(0, 1)
# parameters/idle/blend_position
@onready var animation_tree = $AnimationTree
@onready var state_machine = animation_tree.get("parameters/playback")

func _ready():
	#animation_tree.set("parameters/idle/blend_position", starting_direction)
	update_animation_parameters(starting_direction)

func _physics_process(_delta):

	

	#Input diretion
	var input_direction = Vector2(
		Input.get_action_strength("right") - Input.get_action_strength("left"),
		Input.get_action_strength("down") - Input.get_action_strength("up")
	);
	
	update_animation_parameters(input_direction)


		#update velocity
	velocity = input_direction * move_speed

		#Move and slide function uses veloicty of characters to move
	pick_new_state()
	
	move_and_slide()
	
func update_animation_parameters(move_input : Vector2):
	#change animation parameters if there is no move input
	if(move_input != Vector2.ZERO):
		animation_tree.set("parameters/Walk_Down/blend_position", move_input)
		animation_tree.set("parameters/idle/blend_position", move_input)

func pick_new_state():
	if (velocity != Vector2.ZERO):
		state_machine.travel("Walk_Down")
	else:
		state_machine.travel("idle")
