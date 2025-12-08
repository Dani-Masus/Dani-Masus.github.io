extends CharacterBody2D

@export var move_speed : float = 100

func _physics_process(_delta);

#Input diretion
var input_direction = Vector2(
	input.get_action_strength("right") - input.get_action_strength("left"),
	input.Get_action_strength("down") - input.get_action_strength("left")
);



#update velocity
#velocity = input_direction * move_speed
#Move and slide function uses veloicty of characters to move
move_and_slide()
