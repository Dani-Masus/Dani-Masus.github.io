extends Node2D
class_name InteractionArea


@export var action_name: String = "interact"

var interact: Callable = func():
	pass


@warning_ignore("unused_parameter")
func _on_body_entered(body):
	InteractionManger.register_area(self)


@warning_ignore("unused_parameter")
func _on_body_exited(body):
	InteractionManger.unregistered_area(self)
