
var Player : Transform;
var MoveSpeed : float = 4;
var MinDist = 5;
var MaxDist = 10;
var buttonInRange;


function Start()
{
	buttonInRange = false;
}

function Update ()
{
	//Moves towrd player
	
	
		transform.LookAt (Player);
		if(Vector3.Distance(transform.position,Player.position ) >= MinDist) {
		
			transform.position += transform.forward * MoveSpeed*Time.deltaTime;
			
			
			if(Vector3.Distance(transform.position,Player.position) <= MaxDist)
			{
					
					Destroy(this.gameObject);
			}
		}
}
