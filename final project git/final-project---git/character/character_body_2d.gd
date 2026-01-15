extends CharacterBody2D


@export var move_speed : float = 200

@export var starting_direction : Vector2 = Vector2(0, 1)
# parameters/idle/blend_position
@onready var animation_tree = $AnimationTree
@onready var state_machine = animation_tree.get("parameters/playback")

#Interacton with bookshelf
@onready var interaction_area: InteractionArea = $InteractionArea
@onready var sprite = $Sprite2D




func _ready():
	animation_tree.set("parameters/idle/blend_position", starting_direction)
	update_animation_parameters(starting_direction)
	interaction_area.interact = Callable(self, "_on_interact")

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



const lines: Array[String] = [
	"pick a book"
]

func _on_interact():
	InteractionManger.start_dialog(global_position, lines)
	sprite.flip_h = true if interaction_area.get_overlapping_bodies()[0].global_position.x else false
	await InteractionManger.dialog_finished
