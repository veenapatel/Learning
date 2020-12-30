package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Dell\\eclipse-workspace\\FreeCRM\\src\\main\\java\\Features\\CRMLogin.feature",
		glue={"StepDefinitions"},
		monochrome=true,
		dryRun=false,
		format= {"pretty","html:html-output"}
		)

public class TestRunner {

}
