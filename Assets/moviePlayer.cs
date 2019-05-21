using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class moviePlayet : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
	((MovieTexture)GetComponent<Renderer>().material.mainTexture).Play();

	}
}
