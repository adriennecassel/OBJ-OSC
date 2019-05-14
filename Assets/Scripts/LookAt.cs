using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LookAt : MonoBehaviour {

	public Transform target;
	public float speed = 5f;
	
	private void Update () {

		Vector3 direction = target.position - transform.position;
		Quaternion rotation = Quaternion.LookRotation(direction);
		Debug.Log(direction);
		transform.rotation = rotation;
		//slows rotation down: 
		//transform.rotation = Quaternion.Lerp(transform.rotation, rotation, speed * Time.deltaTime);
	}		

}
