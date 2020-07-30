use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn solve(params: &str) -> String {
  let ps: (f32, f32) = serde_json::from_str(&params).unwrap();
  let c: f32 = (ps.0 * ps.0 + ps.1 * ps.1).sqrt();

  let mut solution: (f32, f32) = (0., 0.);
  solution.0 = c;
  solution.1 = c*c;

  return serde_json::to_string(&solution).unwrap();

}
